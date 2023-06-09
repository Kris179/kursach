PGDMP         ;    
            {            parfume    13.9    13.9 ?    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                        1262    16544    parfume    DATABASE     d   CREATE DATABASE parfume WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE parfume;
                postgres    false            �            1259    16596    OrderID_ProductID    TABLE     �   CREATE TABLE public."OrderID_ProductID" (
    "ID" integer NOT NULL,
    "ProductID" integer NOT NULL,
    "OrderID" integer NOT NULL
);
 '   DROP TABLE public."OrderID_ProductID";
       public         heap    postgres    false            �            1259    16594    OrderID_ProductID_ID_seq    SEQUENCE     �   CREATE SEQUENCE public."OrderID_ProductID_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."OrderID_ProductID_ID_seq";
       public          postgres    false    210                       0    0    OrderID_ProductID_ID_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public."OrderID_ProductID_ID_seq" OWNED BY public."OrderID_ProductID"."ID";
          public          postgres    false    209            �            1259    16569    Orders    TABLE     �   CREATE TABLE public."Orders" (
    "OrderID" integer NOT NULL,
    "UserID" integer NOT NULL,
    "Date" date NOT NULL,
    "Price" integer NOT NULL
);
    DROP TABLE public."Orders";
       public         heap    postgres    false            �            1259    16567    Orders_OrderID_seq    SEQUENCE     �   CREATE SEQUENCE public."Orders_OrderID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."Orders_OrderID_seq";
       public          postgres    false    204                       0    0    Orders_OrderID_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."Orders_OrderID_seq" OWNED BY public."Orders"."OrderID";
          public          postgres    false    203            �            1259    16577    Photos    TABLE     �   CREATE TABLE public."Photos" (
    "PhotoID" integer NOT NULL,
    "ProductID" integer NOT NULL,
    "Path" character varying NOT NULL
);
    DROP TABLE public."Photos";
       public         heap    postgres    false            �            1259    16575    Photos_PhotoID_seq    SEQUENCE     �   CREATE SEQUENCE public."Photos_PhotoID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."Photos_PhotoID_seq";
       public          postgres    false    206                       0    0    Photos_PhotoID_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."Photos_PhotoID_seq" OWNED BY public."Photos"."PhotoID";
          public          postgres    false    205            �            1259    16558    Products    TABLE     �   CREATE TABLE public."Products" (
    "ProductID" integer NOT NULL,
    "Name" character varying NOT NULL,
    "Price" integer NOT NULL,
    description character varying NOT NULL
);
    DROP TABLE public."Products";
       public         heap    postgres    false            �            1259    16556    Products_ProductID_seq    SEQUENCE     �   CREATE SEQUENCE public."Products_ProductID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."Products_ProductID_seq";
       public          postgres    false    202                       0    0    Products_ProductID_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."Products_ProductID_seq" OWNED BY public."Products"."ProductID";
          public          postgres    false    201            �            1259    16588    Sessions    TABLE     d   CREATE TABLE public."Sessions" (
    "SessionID" integer NOT NULL,
    "UserID" integer NOT NULL
);
    DROP TABLE public."Sessions";
       public         heap    postgres    false            �            1259    16586    Sessions_SessionID_seq    SEQUENCE     �   CREATE SEQUENCE public."Sessions_SessionID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."Sessions_SessionID_seq";
       public          postgres    false    208                       0    0    Sessions_SessionID_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."Sessions_SessionID_seq" OWNED BY public."Sessions"."SessionID";
          public          postgres    false    207            �            1259    16547    Users    TABLE     a  CREATE TABLE public."Users" (
    "UserID" integer NOT NULL,
    "Login" character varying NOT NULL,
    "Password" character varying NOT NULL,
    "FIO" character varying NOT NULL,
    "Email" character varying NOT NULL,
    "Admin" boolean DEFAULT false NOT NULL,
    "Activation" boolean DEFAULT false NOT NULL,
    "ActivationLink" text NOT NULL
);
    DROP TABLE public."Users";
       public         heap    postgres    false            �            1259    16693    user_tokens    TABLE     i   CREATE TABLE public.user_tokens (
    id bigint NOT NULL,
    token text,
    user_id bigint NOT NULL
);
    DROP TABLE public.user_tokens;
       public         heap    postgres    false            �            1259    16689    user_tokens_id_seq    SEQUENCE     {   CREATE SEQUENCE public.user_tokens_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.user_tokens_id_seq;
       public          postgres    false    214                       0    0    user_tokens_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.user_tokens_id_seq OWNED BY public.user_tokens.id;
          public          postgres    false    212            �            1259    16691    user_tokens_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_tokens_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.user_tokens_user_id_seq;
       public          postgres    false    214                       0    0    user_tokens_user_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.user_tokens_user_id_seq OWNED BY public.user_tokens.user_id;
          public          postgres    false    213            �            1259    16686 
   userid_seq    SEQUENCE     �   CREATE SEQUENCE public.userid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 10000000000000000
    CACHE 1
    CYCLE;
 !   DROP SEQUENCE public.userid_seq;
       public          postgres    false    200                       0    0 
   userid_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.userid_seq OWNED BY public."Users"."UserID";
          public          postgres    false    211            S           2604    16599    OrderID_ProductID ID    DEFAULT     �   ALTER TABLE ONLY public."OrderID_ProductID" ALTER COLUMN "ID" SET DEFAULT nextval('public."OrderID_ProductID_ID_seq"'::regclass);
 G   ALTER TABLE public."OrderID_ProductID" ALTER COLUMN "ID" DROP DEFAULT;
       public          postgres    false    209    210    210            P           2604    16572    Orders OrderID    DEFAULT     v   ALTER TABLE ONLY public."Orders" ALTER COLUMN "OrderID" SET DEFAULT nextval('public."Orders_OrderID_seq"'::regclass);
 A   ALTER TABLE public."Orders" ALTER COLUMN "OrderID" DROP DEFAULT;
       public          postgres    false    204    203    204            Q           2604    16580    Photos PhotoID    DEFAULT     v   ALTER TABLE ONLY public."Photos" ALTER COLUMN "PhotoID" SET DEFAULT nextval('public."Photos_PhotoID_seq"'::regclass);
 A   ALTER TABLE public."Photos" ALTER COLUMN "PhotoID" DROP DEFAULT;
       public          postgres    false    206    205    206            O           2604    16561    Products ProductID    DEFAULT     ~   ALTER TABLE ONLY public."Products" ALTER COLUMN "ProductID" SET DEFAULT nextval('public."Products_ProductID_seq"'::regclass);
 E   ALTER TABLE public."Products" ALTER COLUMN "ProductID" DROP DEFAULT;
       public          postgres    false    201    202    202            R           2604    16591    Sessions SessionID    DEFAULT     ~   ALTER TABLE ONLY public."Sessions" ALTER COLUMN "SessionID" SET DEFAULT nextval('public."Sessions_SessionID_seq"'::regclass);
 E   ALTER TABLE public."Sessions" ALTER COLUMN "SessionID" DROP DEFAULT;
       public          postgres    false    208    207    208            N           2604    16688    Users UserID    DEFAULT     j   ALTER TABLE ONLY public."Users" ALTER COLUMN "UserID" SET DEFAULT nextval('public.userid_seq'::regclass);
 ?   ALTER TABLE public."Users" ALTER COLUMN "UserID" DROP DEFAULT;
       public          postgres    false    211    200            T           2604    16696    user_tokens id    DEFAULT     p   ALTER TABLE ONLY public.user_tokens ALTER COLUMN id SET DEFAULT nextval('public.user_tokens_id_seq'::regclass);
 =   ALTER TABLE public.user_tokens ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    214    214            U           2604    16697    user_tokens user_id    DEFAULT     z   ALTER TABLE ONLY public.user_tokens ALTER COLUMN user_id SET DEFAULT nextval('public.user_tokens_user_id_seq'::regclass);
 B   ALTER TABLE public.user_tokens ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    213    214    214            �          0    16596    OrderID_ProductID 
   TABLE DATA           K   COPY public."OrderID_ProductID" ("ID", "ProductID", "OrderID") FROM stdin;
    public          postgres    false    210   �G       �          0    16569    Orders 
   TABLE DATA           H   COPY public."Orders" ("OrderID", "UserID", "Date", "Price") FROM stdin;
    public          postgres    false    204   �G       �          0    16577    Photos 
   TABLE DATA           B   COPY public."Photos" ("PhotoID", "ProductID", "Path") FROM stdin;
    public          postgres    false    206   �G       �          0    16558    Products 
   TABLE DATA           O   COPY public."Products" ("ProductID", "Name", "Price", description) FROM stdin;
    public          postgres    false    202   �G       �          0    16588    Sessions 
   TABLE DATA           ;   COPY public."Sessions" ("SessionID", "UserID") FROM stdin;
    public          postgres    false    208   �G       �          0    16547    Users 
   TABLE DATA           y   COPY public."Users" ("UserID", "Login", "Password", "FIO", "Email", "Admin", "Activation", "ActivationLink") FROM stdin;
    public          postgres    false    200   H       �          0    16693    user_tokens 
   TABLE DATA           9   COPY public.user_tokens (id, token, user_id) FROM stdin;
    public          postgres    false    214   fI       	           0    0    OrderID_ProductID_ID_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."OrderID_ProductID_ID_seq"', 1, false);
          public          postgres    false    209            
           0    0    Orders_OrderID_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Orders_OrderID_seq"', 4, true);
          public          postgres    false    203                       0    0    Photos_PhotoID_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."Photos_PhotoID_seq"', 1, false);
          public          postgres    false    205                       0    0    Products_ProductID_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."Products_ProductID_seq"', 1, false);
          public          postgres    false    201                       0    0    Sessions_SessionID_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."Sessions_SessionID_seq"', 1, false);
          public          postgres    false    207                       0    0    user_tokens_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.user_tokens_id_seq', 36, true);
          public          postgres    false    212                       0    0    user_tokens_user_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.user_tokens_user_id_seq', 1, false);
          public          postgres    false    213                       0    0 
   userid_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.userid_seq', 23, true);
          public          postgres    false    211            a           2606    16601 &   OrderID_ProductID OrderID_ProductID_pk 
   CONSTRAINT     j   ALTER TABLE ONLY public."OrderID_ProductID"
    ADD CONSTRAINT "OrderID_ProductID_pk" PRIMARY KEY ("ID");
 T   ALTER TABLE ONLY public."OrderID_ProductID" DROP CONSTRAINT "OrderID_ProductID_pk";
       public            postgres    false    210            [           2606    16574    Orders Orders_pk 
   CONSTRAINT     Y   ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_pk" PRIMARY KEY ("OrderID");
 >   ALTER TABLE ONLY public."Orders" DROP CONSTRAINT "Orders_pk";
       public            postgres    false    204            ]           2606    16585    Photos Photos_pk 
   CONSTRAINT     Y   ALTER TABLE ONLY public."Photos"
    ADD CONSTRAINT "Photos_pk" PRIMARY KEY ("PhotoID");
 >   ALTER TABLE ONLY public."Photos" DROP CONSTRAINT "Photos_pk";
       public            postgres    false    206            Y           2606    16566    Products Products_pk 
   CONSTRAINT     _   ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_pk" PRIMARY KEY ("ProductID");
 B   ALTER TABLE ONLY public."Products" DROP CONSTRAINT "Products_pk";
       public            postgres    false    202            _           2606    16593    Sessions Sessions_pk 
   CONSTRAINT     _   ALTER TABLE ONLY public."Sessions"
    ADD CONSTRAINT "Sessions_pk" PRIMARY KEY ("SessionID");
 B   ALTER TABLE ONLY public."Sessions" DROP CONSTRAINT "Sessions_pk";
       public            postgres    false    208            W           2606    16555    Users Users_pk 
   CONSTRAINT     V   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pk" PRIMARY KEY ("UserID");
 <   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pk";
       public            postgres    false    200            c           2606    16702    user_tokens user_tokens_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.user_tokens
    ADD CONSTRAINT user_tokens_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.user_tokens DROP CONSTRAINT user_tokens_pkey;
       public            postgres    false    214            g           2606    16617 '   OrderID_ProductID OrderID_ProductID_fk0    FK CONSTRAINT     �   ALTER TABLE ONLY public."OrderID_ProductID"
    ADD CONSTRAINT "OrderID_ProductID_fk0" FOREIGN KEY ("ProductID") REFERENCES public."Products"("ProductID");
 U   ALTER TABLE ONLY public."OrderID_ProductID" DROP CONSTRAINT "OrderID_ProductID_fk0";
       public          postgres    false    202    2905    210            h           2606    16622 '   OrderID_ProductID OrderID_ProductID_fk1    FK CONSTRAINT     �   ALTER TABLE ONLY public."OrderID_ProductID"
    ADD CONSTRAINT "OrderID_ProductID_fk1" FOREIGN KEY ("OrderID") REFERENCES public."Orders"("OrderID");
 U   ALTER TABLE ONLY public."OrderID_ProductID" DROP CONSTRAINT "OrderID_ProductID_fk1";
       public          postgres    false    2907    204    210            d           2606    16602    Orders Orders_fk0    FK CONSTRAINT     }   ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_fk0" FOREIGN KEY ("UserID") REFERENCES public."Users"("UserID");
 ?   ALTER TABLE ONLY public."Orders" DROP CONSTRAINT "Orders_fk0";
       public          postgres    false    2903    200    204            e           2606    16607    Photos Photos_fk0    FK CONSTRAINT     �   ALTER TABLE ONLY public."Photos"
    ADD CONSTRAINT "Photos_fk0" FOREIGN KEY ("ProductID") REFERENCES public."Products"("ProductID");
 ?   ALTER TABLE ONLY public."Photos" DROP CONSTRAINT "Photos_fk0";
       public          postgres    false    206    2905    202            f           2606    16612    Sessions Sessions_fk0    FK CONSTRAINT     �   ALTER TABLE ONLY public."Sessions"
    ADD CONSTRAINT "Sessions_fk0" FOREIGN KEY ("UserID") REFERENCES public."Users"("UserID");
 C   ALTER TABLE ONLY public."Sessions" DROP CONSTRAINT "Sessions_fk0";
       public          postgres    false    200    208    2903            i           2606    16703 $   user_tokens user_tokens_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_tokens
    ADD CONSTRAINT user_tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."Users"("UserID");
 N   ALTER TABLE ONLY public.user_tokens DROP CONSTRAINT user_tokens_user_id_fkey;
       public          postgres    false    200    2903    214            �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �   <  x�e�AN�@���)X��ؙi;�NB�!����a
��5m%ĕ��
ƍ�hbB$r���1/���_��>���<* �F��ԃ<����OF��qǝʩ�������m9�i� 7h�e��3C=W�j]=TK�V_jUS/j���Fm����}ӻQ:�T[��x��4�b�PF)��p<cQD63B=�!a� ����PX����B"vB���o*F�^ٟܼ`9H;��?���jz: ��]{��+��=o��)=n�����ܶZ�ԓ�Yi��u������ZrRGb� ���V��rArm���4�o�2      �   �  x���K��0 �s�_626I�#!!�����UZ��CH���/+��ސ8Y�ƣ#�P�]:+��1w�e��)an>��ak���K��,e�y1���p73;[��&eć��}��"��>a>	T�`H�I�8i�v��*���"͓���������0g �v�^z�7)��K߁�y9�&ѽ�F�c_\X���]i!`[���`v�j
��+�>�k�kRWÊ�SےG�������I�h+`�C�zD�2���3���}a�eꜰ@)i�bP�L�pBUHe�A����0t(�B��(/3+F[R�٣�ٵu������oC��s�-�P�����x�|/pN?��.����Mx�%
��0o��MT�fΡ2��I����z2���d8vC&��N����&����2�]�"�M�O=�r�/=��)U�b%��C�W����H> ����bm��ɟ59�g���p�s���n'��No��.���o�GW�     