﻿using System;

namespace _06_Concatenate_Data_
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            string lastName = Console.ReadLine();
            int age = int.Parse(Console.ReadLine());
            string city = Console.ReadLine();

            Console.WriteLine($"You are {name} {lastName}, a {age}-years old person from {city}.");
        }
    }
}