﻿using System;

namespace _02_N_To_1
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

                for (int i = n; i >= 1; i--)
            {
                Console.WriteLine(n);
            }
        }
    }
}