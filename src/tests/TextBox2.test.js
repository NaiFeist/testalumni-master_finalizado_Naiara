import { render, screen } from "@testing-library/react";
import TextBox2 from "../components/TextBox2";
import userEvent from "@testing-library/user-event";

describe('TextBox2 componente', () => {

    let box;
    let button;     
    
    beforeEach(() => {
        render(<TextBox2 />); // Aquí generamos el virtual DOM

        box = screen.getByRole('caja', { name: 'es una caja' });

        button = screen.getByRole('button', { name: 'Pulsa para modificar el color del texto' });
    });

    test('la caja de texto se encuentra en el documento', () => {

        expect(box).toBeInTheDocument();
    });
    
    test('la caja con el texto tiene un color inicial rosa', () => {
   
        expect(box).toHaveStyle({
            color: 'pink'
        });
    });
    
    test('comprobar si al pulsar el botón cambia el color de la caja a negro', async () => {
   
        await userEvent.click(button);
        expect(box).toHaveStyle({
            color: 'black'
        });
    });
});
