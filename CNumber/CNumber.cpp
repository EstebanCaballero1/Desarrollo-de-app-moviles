#include "CNumber.h"

CNumero::CNumero(int num1, int num2, int num3) {
    numeros = new int[3];
    numeros[0] = num1;
    numeros[1] = num2;
    numeros[2] = num3;
}

CNumero::CNumero(const CNumero& other) {
    numeros = new int[3];
    for ( int i = 0; i < 3; i++ ) {
        numeros[i] = other.numeros[i];
    }
}

CNumero::~CNumero() {
    delete[] numeros;
}

int CNumero::getMaximo() {
    int maximo = numeros[0];
    for ( int i = 1; i < 3; i++ ) {
        if ( numeros[i] > maximo ) {
            maximo = numeros[i];
        }
    }
    return maximo;
}

int CNumero::getMinimo() {
    int minimo = numeros[0];
    for ( int i = 1; i < 3; i++ ) {
        if ( numeros[i] < minimo ) {
            minimo = numeros[i];
        }
    }
    return minimo;
}

double CNumero::getPromedio() {
    double suma = 0;
    for ( int i = 0; i < 3; i++ ) {
        suma += numeros[i];
    }
    return suma / 3;
}

int CNumero::getCantidadPares() {
    int cantidad = 0;
    for ( int i = 0; i < 3; i++ ) {
        if ( numeros[i] % 2 == 0 ) {
            cantidad++;
        }
    }
    return cantidad;
}

int CNumero::getCantidadImpares() {
    int cantidad = 0;
    for ( int i = 0; i < 3; i++ ) {
        if ( numeros[i] % 2 != 0 ) {
            cantidad++;
        }
    }
    return cantidad;
}