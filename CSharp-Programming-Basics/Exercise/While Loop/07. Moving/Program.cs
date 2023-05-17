using System;

namespace _07_Moving_
{
    class Program
    {
        static void Main(string[] args)
        {
            int width = int.Parse(Console.ReadLine());
            int length = int.Parse(Console.ReadLine());
            int heigth = int.Parse(Console.ReadLine());
            int spaceFree = width * length * heigth;

            while (true)
            {
                string command = Console.ReadLine();
                if (command == "Done")
                {
                    Console.WriteLine($"{spaceFree} Cubic meters left.");
                    break;
                }

                int space = int.Parse(command);
                if (space > spaceFree)
                {
                    Console.WriteLine($"No more free space! You need {space - spaceFree} Cubic meters more.");
                    break;
                }

                spaceFree -= space;

                if (spaceFree == 0)
                {
                    Console.WriteLine($"0 Cubic meters left.");
                    break;
                }
            }
        }
    }
}