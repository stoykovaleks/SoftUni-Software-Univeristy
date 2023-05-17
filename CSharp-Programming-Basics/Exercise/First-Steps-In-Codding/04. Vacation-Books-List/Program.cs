using System;

namespace _04_Vacantion_Book_List_
{
    class Program
    {
        static void Main(string[] args)
        {
            int pagesCount = int.Parse(Console.ReadLine());
            int pagesReadPerHour = int.Parse(Console.ReadLine());
            int daysCount = int.Parse(Console.ReadLine());

            int hours = pagesCount / pagesReadPerHour;
            int neededHours = hours / daysCount;

            Console.WriteLine(neededHours);
        }
    }
}