import java.util.Scanner;

public class ListaNumeros {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese un valor entero: ");
        int valorIngresado = scanner.nextInt();

        System.out.print("Lista de números: ");
        for (int i = 0; i <= valorIngresado; i++) {
            System.out.print(i);
            
            // Agregar una coma si no es el último número
            if (i < valorIngresado) {
                System.out.print(", ");
            }
        }

        // Cerrar el scanner al final
        scanner.close();
    }
}