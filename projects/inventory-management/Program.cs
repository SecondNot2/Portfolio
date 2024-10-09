using System;
using System.Windows;

namespace InventoryManagement
{
    public class Program
    {
        [STAThread]
        public static void Main()
        {
            var app = new Application();
            var window = new MainWindow();
            window.Title = "Inventory Management System";
            window.Content = new TextBlock
            {
                Text = "Hello, C# and WPF!",
                FontSize = 24,
                HorizontalAlignment = HorizontalAlignment.Center,
                VerticalAlignment = VerticalAlignment.Center
            };
            app.Run(window);
        }
    }
}