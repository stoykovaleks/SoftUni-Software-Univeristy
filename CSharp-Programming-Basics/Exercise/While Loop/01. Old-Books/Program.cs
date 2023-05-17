using System;

namespace _01_Old_Books_
{
    class Program
    {
        static void Main(string[] args)
        {
            string currentBook = Console.ReadLine();
            int booksCount = 0;
            string input = "";

            while (input != "No More Books" || input != currentBook)
            {
                input = Console.ReadLine();

                if (input == "No More Books")
                {
                    booksCount++;
                    break;
                }

                if (input == currentBook)
                {
                    booksCount++;
                    Console.WriteLine($"You checked {booksCount} books and found it.");
                }
                else
                {
                    booksCount++;
                    Console.WriteLine($"The book you search is not here!");
                    Console.WriteLine($"You checked {booksCount} books.");
                    break;
                }
            }
        }
    }
}