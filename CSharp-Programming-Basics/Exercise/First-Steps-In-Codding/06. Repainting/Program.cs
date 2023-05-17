using System;

namespace _06_Repainting_
{
    class Program
    {
        static void Main(string[] args)
        {
            int nylonNeeded = int.Parse(Console.ReadLine());
            int paintNeeded = int.Parse(Console.ReadLine());
            int diluent = int.Parse(Console.ReadLine());
            int hoursNeeded = int.Parse(Console.ReadLine());

            double priceNylon = (nylonNeeded + 2) * 1.50;
            double pricePaint = (paintNeeded * 1.1) * 14.50;
            double priceDiluent = diluent * 5.0;
            double sumMaterials = priceNylon + pricePaint + priceDiluent + 0.40;
            double priceWorkers = (sumMaterials * 0.3) * hoursNeeded;
            double totalSum = sumMaterials + priceWorkers;

            Console.WriteLine(totalSum);
        }
    }
}