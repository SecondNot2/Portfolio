import matplotlib.pyplot as plt
import numpy as np

def main():
    print("Data Analysis Tool")
    
    # Generate some sample data
    x = np.linspace(0, 10, 100)
    y = np.sin(x)
    
    # Create a simple plot
    plt.plot(x, y)
    plt.title("Sample Sine Wave")
    plt.xlabel("X-axis")
    plt.ylabel("Y-axis")
    plt.show()

if __name__ == "__main__":
    main()