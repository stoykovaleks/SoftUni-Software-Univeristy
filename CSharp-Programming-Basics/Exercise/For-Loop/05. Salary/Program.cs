﻿using System;
using System.Collections.Generic;

namespace _05_Salary_
{
    class Program
    {
        static void Main(string[] args)
        {
            int tabsCount = int.Parse(Console.ReadLine());
            double salary = double.Parse(Console.ReadLine());

            for (int i = 0; i < tabsCount; i++)
            {
                string website = Console.ReadLine();

                switch (website)
                {
                    case "Facebook": salary -= 150; break;
                    case "Instagram": salary -= 100; break;
                    case "Reddit": salary -= 50; break;
                    default:
                        break;
                }
            }
            if (salary <= 0)
            {
                Console.WriteLine("You have lost your salary.");
                
            }
            else
            {
                Console.WriteLine(salary);
            }
            
        }
    }
}