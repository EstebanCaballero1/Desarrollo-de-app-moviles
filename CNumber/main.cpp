#include <iostream>
#include <cstdlib>
#include "CNumber.h"

using std::cout; using std::cin; using std::endl;

int main() {
    int num1, num2, num3;
    cout << "Ingrese el primer numero: ";
    cin >> num1;
    cout << "Ingrese el segundo numero: ";
    cin >> num2;
    cout << "Ingrese el tercer numero: ";
    cin >> num3;

    CNumero numero(num1, num2, num3);

    cout << "Maximo: " << numero.getMaximo() << endl;
    cout << "Minimo: " << numero.getMinimo() << endl;
    cout << "Promedio: " << numero.getPromedio() << endl;
    cout << "Cantidad de numeros pares: " << numero.getCantidadPares() << endl;
    cout << "Cantidad de numeros impares: " << numero.getCantidadImpares() << endl;

	system( "pause" );
    return 0;
}