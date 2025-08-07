-- Create products table
CREATE TABLE public.products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image TEXT NOT NULL,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- Create profiles table for additional user info
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for products (only admins can modify, everyone can read)
CREATE POLICY "Anyone can read products"
ON public.products
FOR SELECT
USING (true);

CREATE POLICY "Only admins can insert products"
ON public.products
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update products"
ON public.products
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete products"
ON public.products
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- RLS policies for user_roles (only admins can manage roles)
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- RLS policies for profiles
CREATE POLICY "Users can view all profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Users can update their own profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (id = auth.uid());

CREATE POLICY "Users can insert their own profile"
ON public.profiles
FOR INSERT
TO authenticated
WITH CHECK (id = auth.uid());

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, username)
  VALUES (new.id, new.raw_user_meta_data ->> 'username');
  
  -- Auto-assign user role to new signups
  INSERT INTO public.user_roles (user_id, role)
  VALUES (new.id, 'user');
  
  RETURN new;
END;
$$;

-- Trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for products updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial products data
INSERT INTO public.products (name, price, image, category) VALUES
('Vitamin C Serum', 29.99, '/product1.jpeg', 'Serums'),
('Hyaluronic Acid Moisturizer', 24.99, '/product2.jpeg', 'Moisturizers'),
('Retinol Night Cream', 34.99, '/product3.jpeg', 'Night Care'),
('Gentle Cleanser', 19.99, '/product4.jpeg', 'Cleansers'),
('SPF 50 Sunscreen', 22.99, '/product5.jpeg', 'Sun Protection'),
('Niacinamide Toner', 18.99, '/product6.jpeg', 'Toners'),
('Collagen Face Mask', 15.99, '/product7.jpeg', 'Masks'),
('Eye Cream', 27.99, '/product8.jpeg', 'Eye Care'),
('Exfoliating Scrub', 21.99, '/product9.jpeg', 'Exfoliants'),
('Anti-Aging Serum', 39.99, '/product10.jpeg', 'Serums'),
('Rose Water Toner', 16.99, '/product11.jpeg', 'Toners'),
('Brightening Mask', 23.99, '/product12.jpeg', 'Masks'),
('Peptide Cream', 45.99, '/product13.jpeg', 'Anti-Aging'),
('Salicylic Acid Cleanser', 20.99, '/product14.jpeg', 'Cleansers'),
('Hydrating Serum', 26.99, '/product15.jpeg', 'Serums'),
('Night Repair Oil', 32.99, '/product16.jpeg', 'Oils'),
('Mineral Sunscreen', 25.99, '/product17.jpeg', 'Sun Protection'),
('Caffeine Eye Serum', 24.99, '/product18.jpeg', 'Eye Care'),
('AHA/BHA Exfoliant', 28.99, '/product19.jpeg', 'Exfoliants'),
('Barrier Repair Cream', 31.99, '/product20.jpeg', 'Moisturizers'),
('Vitamin E Oil', 17.99, '/product21.jpeg', 'Oils'),
('Clay Mask', 19.99, '/product22.jpeg', 'Masks'),
('Antioxidant Serum', 33.99, '/product23.jpeg', 'Serums'),
('Micellar Water', 14.99, '/product24.jpeg', 'Cleansers'),
('Glow Enhancer', 29.99, '/product25.jpeg', 'Treatments'),
('Firming Cream', 42.99, '/product26.jpeg', 'Anti-Aging'),
('Pore Minimizer', 23.99, '/product27.jpeg', 'Treatments'),
('Lip Treatment', 12.99, '/product28.jpeg', 'Lip Care'),
('Hand Cream', 11.99, '/product29.jpeg', 'Body Care'),
('Body Lotion', 18.99, '/product30.jpeg', 'Body Care'),
('Face Oil Blend', 35.99, '/product31.jpeg', 'Oils');