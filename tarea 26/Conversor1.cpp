//---------------------------------------------------------------------------

#include <fmx.h>
#pragma hdrstop

#include "Conversor1.h"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.fmx"
TForm2 *Form2;

//---------------------------------------------------------------------------
__fastcall TForm2::TForm2(TComponent* Owner)
	: TForm(Owner)
{
}
//---------------------------------------------------------------------------
void __fastcall TForm2::Button1Click(TObject *Sender)
{
	int valor;

	if ( Sender == Button1 ) {
		valor = StrToInt(Edit2 -> Text);
		Edit1 -> Text = valor / 483;
	} else {
		valor = StrToInt(Edit1 -> Text);
		Edit2 -> Text = valor * 478;
	}
}
//---------------------------------------------------------------------------
