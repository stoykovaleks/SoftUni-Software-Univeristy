﻿using System;

namespace _01_Clock_
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int h = 0; h <= 23; h++)
            {
                for (int min = 0; min <= 59; min++)
                {
                    Console.WriteLine($"{h}:{min}");
                }
            }
        }
    }
}