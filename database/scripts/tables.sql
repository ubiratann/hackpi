create database hackpi;


create table element(
	id 				numeric constraint pk_element primary key,
	description 	varchar(100) not null,
	education_level numeric not null
);

create table category(
	id 				numeric constraint pk_category primary key,
	name 			varchar(100) not null,
	image 			varchar(100) not null,
	description 	varchar(100) not null,
	education_level numeric not null
);


create table avatar(
	id 		numeric constraint pk_avatar primary key,
	image 	varchar(100) not null
);

create table school(
	id 			numeric constraint pk_school primary key,
	student_id 	numeric not null,
	image 		varchar(100) not null
);

create table student(
	id 				numeric constraint pk_student primary key,
	avatar_id 		numeric constraint fk_avatar references avatar (id),
	school_id 		numeric constraint fk_school references school (id),
	name 			varchar(100) not null,
	age 			date not null,
	education_level numeric not null
);


create table response(
	id 			numeric constraint pk_response primary key,
	student_id 	numeric constraint fk_student references student (id),
	category_id numeric constraint fk_category references category (id),
	element_id 	numeric constraint fk_element references element (id),
	afirmative	bool not null 
);



--INSERT INTO public.avatar
--(id, image)
--VALUES(1, 'Teste');



