--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0 (Ubuntu 14.0-1.pgdg21.04+1)
-- Dumped by pg_dump version 14.0 (Ubuntu 14.0-1.pgdg21.04+1)

-- Started on 2021-10-23 14:27:03 -05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16470)
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- TOC entry 3489 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16496)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    user_email character varying(255) NOT NULL,
    user_name character varying(255),
    user_password character varying(255) NOT NULL,
    user_avatar character varying(255),
    user_regdate timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    user_lastlogin timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 3483 (class 0 OID 16496)
-- Dependencies: 210
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, user_email, user_name, user_password, user_avatar, user_regdate, user_lastlogin) FROM stdin;
81057237-bc96-44b8-970c-ef2fe754995d	test@gmail.com	\N	$2b$10$gylyBujP6TqyfN0HhkEkZOxQyx1dK9QLm5fS11AwHvovdmUEfDR96	\N	2021-10-23 13:54:31.809625-05	2021-10-23 13:54:31.809625-05
\.


--
-- TOC entry 3341 (class 2606 OID 16505)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3343 (class 2606 OID 16507)
-- Name: users users_user_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_user_email_key UNIQUE (user_email);


-- Completed on 2021-10-23 14:27:03 -05

--
-- PostgreSQL database dump complete
--

