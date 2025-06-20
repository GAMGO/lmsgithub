package Rungame_2018;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Board extends JPanel implements ActionListener{
	Car p; //Car.java�� ��ũ��Ʈ�� ����ϱ� ���� �����̸��� p.
	Image img;
	Timer time;
	
	public Board() {
		p=new Car();
		addKeyListener(new AL());
		setFocusable(true);
		time = new Timer(5, this);
		time.start();
	}
	public void update (Graphics g) {
		ImageIcon i = new ImageIcon ("D:\\java\\Rungame_Packages\\data\\road.png");
		img = i.getImage();
	}
	
	@Override
	public void actionPerformed(ActionEvent e) {
		p.move();
		p.accel();
		if(p.dy>=180)
		p.dy=0;
		if(p.x>=421){
			p.x = 420;
		}else if (p.x<=149){
			p.x = 150;
		//�ٽ� �׷����� ��ġ���� �˾ƺ����� ���� ����Ʈ�غ���! �ڵ����� ���� ���� �������� ����  ����̾� ������ �ٸ� ����� �������� �����Ƿ�...
		//if���� ����ؼ� ���ΰ� �׷��� �κ��� ���۰� ���κ��� ã�� �Է��ؼ� �� ���κ��� -1 �ȼ��� ������ �ٽ� �׸��� �Ѵ�.
		}else if (p.x<=230){
			System.out.println("������");
		}
		repaint();
		//-p.getY()
		
	}
	@Override
	// swing���� paint�� �ƴ� paintComponent�� ����Ѵ�.
	public void paintComponent (Graphics g) {
		super.paintComponent(g);
		Graphics2D g2d = (Graphics2D) g;
		g2d.drawImage(img,0,0,null);
		g2d.drawImage(p.getImage(),p.getX(),650,null);
		System.out.println((-p.dy)+"Km/h");
	}
	private class AL extends KeyAdapter{
		public void keyReleased(KeyEvent e) {
			p.keyReleased(e);
		}
		public void keyPressed(KeyEvent e) {
			p.keyPressed(e);
		}
	}
}
