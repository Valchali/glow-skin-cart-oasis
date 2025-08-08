import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    console.log('Setting up admin user...');

    // Create admin user with specific credentials
    const adminEmail = 'valchali@yahoo.com';
    const adminPassword = 'Skincare';
    const adminUsername = 'Bomafart';

    // Check if admin already exists
    const { data: existingUser } = await supabaseClient.auth.admin.listUsers();
    const adminExists = existingUser?.users.find(u => u.email === adminEmail);

    if (adminExists) {
      console.log('Admin user already exists');
      
      // Check if admin role is assigned
      const { data: userRoles } = await supabaseClient
        .from('user_roles')
        .select('*')
        .eq('user_id', adminExists.id);

      const hasAdminRole = userRoles?.some(role => role.role === 'admin');

      if (!hasAdminRole) {
        // Assign admin role
        await supabaseClient
          .from('user_roles')
          .insert([
            { user_id: adminExists.id, role: 'admin' }
          ]);
        console.log('Admin role assigned to existing user');
      }

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Admin user already exists and has admin role' 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      );
    }

    // Create new admin user
    const { data: newUser, error: userError } = await supabaseClient.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true,
      user_metadata: {
        username: adminUsername
      }
    });

    if (userError) {
      console.error('Error creating admin user:', userError);
      throw userError;
    }

    console.log('Admin user created:', newUser.user?.id);

    // Create profile for admin user
    const { error: profileError } = await supabaseClient
      .from('profiles')
      .insert([
        { 
          id: newUser.user!.id, 
          username: adminUsername 
        }
      ]);

    if (profileError) {
      console.error('Error creating admin profile:', profileError);
    }

    // Assign admin role
    const { error: roleError } = await supabaseClient
      .from('user_roles')
      .insert([
        { 
          user_id: newUser.user!.id, 
          role: 'admin' 
        }
      ]);

    if (roleError) {
      console.error('Error assigning admin role:', roleError);
      throw roleError;
    }

    console.log('Admin setup completed successfully');

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Admin user created successfully',
        credentials: {
          email: adminEmail,
          password: adminPassword,
          username: adminUsername
        }
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in setup-admin function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});