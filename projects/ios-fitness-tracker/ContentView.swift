import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("Fitness Tracker")
                .font(.largeTitle)
                .padding()
            Text("Hello, iOS and Swift!")
                .font(.title)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}