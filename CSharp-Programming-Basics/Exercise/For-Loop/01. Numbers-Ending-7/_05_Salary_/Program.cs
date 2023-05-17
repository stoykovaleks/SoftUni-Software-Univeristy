using System;

namespace _05_Salary_
{
    class Program
    {
        static void Main(string[] args)
        {
            int countOpenTabs = int.Parse(Console.ReadLine());
            double salary = double.Parse(Console.ReadLine());
            string website = "";

            for (int i = 0; i < countOpenTabs; i++)
            {
                website = Console.ReadLine();

                if (website == "Facebook")
                {
                    salary -= 150;
                }
                else if (website == "Instagram")
                {
                    salary -= 100;
                }
                else if (website == "Reddit")
                {
                    salary -= 50;
                }
                if (salary <= 0)
                {
                    Console.WriteLine($"You have lost your salary.");
                    break;
                }
            }
            if (salary > 0)
            {
                Console.WriteLine(salary);
            }
        }
    }
}