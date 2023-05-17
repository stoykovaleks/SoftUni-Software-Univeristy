using System;

namespace _07_Food_delivery_
{
    class Program
    {
        static void Main(string[] args)
        {
            int countChickenMenu = int.Parse(Console.ReadLine());
            int countFishMenu = int.Parse(Console.ReadLine());
            int countVegetebleMenu = int.Parse(Console.ReadLine());

            double sumChickenMenus = countChickenMenu * 10.35;
            double sumFishMenus = countFishMenu * 12.40;
            double sumVegetableMenus = countVegetebleMenu * 8.15;
            double menusSum = sumChickenMenus + sumFishMenus + sumVegetableMenus;
            double desertPrice = menusSum*0.2;
            double totalPrice = menusSum + desertPrice + 2.50;

            Console.WriteLine(totalPrice);
        }
    }
}