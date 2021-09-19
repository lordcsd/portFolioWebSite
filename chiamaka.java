import java.swing JOptionPane;


public class FILENAME{

    public static void main(String[] args){
        float  z, zl, c=0.00 ;
        System.out.println("S/N \tNumber \tSquare  \tCube  \n");
        float[] data = new float[]{15,45,77,96,96,46,79,91,77};

        for (int k = 0;k <= 9; k++){
            c = data[k];
            z  = Square(c);
            zl = Cube(c);
            System.out.println(k + "\t" + c + "\t" + z + "\t" + zl);
        }
    }
}