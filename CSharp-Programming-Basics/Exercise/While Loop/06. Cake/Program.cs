using System;

namespace _06_Cake_
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());
            int pieces = a * b;


            while (true)
            {
                string command = Console.ReadLine();

                if (command == "STOP" || pieces == 0)
                {
                    Console.WriteLine($"{pieces} pieces are left.");
                    break;
                }
                int takedPices = int.Parse(command);
                if (takedPices > pieces)
                {
                    Console.WriteLine($"No more cake left! You need {takedPices - pieces} pieces more.");
                    break;
                }
                pieces -= takedPices;
            }
        }
    }
}