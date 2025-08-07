import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const SetupAdmin: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const setupAdmin = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('setup-admin');
      
      if (error) {
        throw error;
      }

      toast({
        title: "Admin Setup Complete",
        description: `Admin user created with credentials: Email: bomafart@admin.com, Password: Skincare`
      });

    } catch (error) {
      console.error('Error setting up admin:', error);
      toast({
        title: "Setup Failed",
        description: "Failed to set up admin user",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Admin Setup
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Click below to create the admin account with the specified credentials.
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p><strong>Username:</strong> Bomafart</p>
            <p><strong>Email:</strong> bomafart@admin.com</p>
            <p><strong>Password:</strong> Skincare</p>
          </div>
          <Button onClick={setupAdmin} disabled={loading} className="w-full">
            {loading ? 'Setting up...' : 'Create Admin Account'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SetupAdmin;