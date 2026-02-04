console.log("************** DELIVERABLE 05 *********************");
// 5. Slot Machine
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

// "Congratulations!!!. You won <número de monedas> coins!!";
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

// "Good luck next time!!".
// Ejemplo de uso
class SlotMachine {
  private monedas: number = 0;

  play(): string {
    this.monedas++;
    const bolean1 = Math.random() > 0.5;
    const bolean2 = Math.random() > 0.5;
    const bolean3 = Math.random() > 0.5;

    if (bolean1 && bolean2 && bolean3) {
      const total: number = this.monedas;
      this.monedas = 0;
      return `Congratulations!!!. You won ${total} coins!!`;
    } else {
      return "Good luck next time!!";
    }
  }
}

const machine1 = new SlotMachine();
console.log(machine1.play()); // "Good luck next time!!"
console.log(machine1.play()); // "Good luck next time!!"
console.log(machine1.play()); // "Congratulations!!!. You won 3 coins!!"
console.log(machine1.play()); // "Good luck next time!!"
console.log(machine1.play()); // "Congratulations!!!. You won 2 coins!!"
console.log(machine1.play()); // "Good luck next time!!"
