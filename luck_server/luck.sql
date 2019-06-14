set names utf8;
drop database if exists luckin;
create database luckin charset=utf8;
use luckin;
-- 首页视频区
create table vedio(
  vid int primary key auto_increment,
  vsrc varchar(256) not null,
  vlogo varchar(256) not null,
  vplay varchar(256) not null
);

insert into vedio values(null,'../../assets/images/8sautoplay.mp4','images/cover_logo@2x.png','@/assets/images/index/play.png');