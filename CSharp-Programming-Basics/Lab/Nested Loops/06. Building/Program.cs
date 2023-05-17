using System;

namespace _06_Buildings_
{
    class Program
    {
        static void Main(string[] args)
        {
            int floors = int.Parse(Console.ReadLine());
            int countRooms = int.Parse(Console.ReadLine());
            int floorNumber = floors;

            for (int currentFloor = 1; currentFloor <= floors; currentFloor++)
            {
                string floorTemplete = "";

                for (int currentRoom = 0; currentRoom < countRooms; currentRoom++)
                {
                    if (currentFloor == 1)
                    {
                        floorTemplete += $"L{floorNumber}{currentRoom} ";
                    }
                    else if (currentFloor % 2 == 0)
                    {
                        floorTemplete += $"A{floorNumber}{currentRoom} ";
                    }
                    else
                    {
                        floorTemplete += $"O{floorNumber}{currentRoom} ";
                    }
                }
                floorNumber--;
                Console.WriteLine(floorTemplete);
            }

        }
    }
}