
import javax.swing.*;

public class Rungame{

	public Rungame() {
		JFrame frame = new JFrame();
		frame.add(new Board());
		frame.setTitle("2D Car RunGame");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setSize(1000,1000);
		frame.setVisible(true);
		frame.setLocationRelativeTo(null);
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		new Rungame();
	}
}
