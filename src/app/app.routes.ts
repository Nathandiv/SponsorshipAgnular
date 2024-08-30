import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BlogComponent } from './pages/blog/blog.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'contact-us', component:ContactUsComponent},
    {path: 'blog', component:BlogComponent},
    {path: 'register-form', component:RegisterFormComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'about-us', component:AboutUsComponent},




  
];
