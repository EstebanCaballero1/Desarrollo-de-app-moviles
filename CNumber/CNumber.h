#ifndef CNUMBER_H
#define CNUMBER_H

class CNumero {
private:
    int* numeros;

public:
    CNumero(int num1, int num2, int num3);
    CNumero(const CNumero& other);
    ~CNumero();

    int getMaximo();
    int getMinimo();
    double getPromedio();
    int getCantidadPares();
    int getCantidadImpares();
};

#endif