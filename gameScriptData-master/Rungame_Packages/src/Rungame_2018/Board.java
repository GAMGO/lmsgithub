package Rungame_2018;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Board extends JPanel implements ActionListener{
	Car p; //Car.java의 스크립트를 사용하기 위한 변수이름은 p.
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
		//다시 그려지는 위치값을 알아보려면 직접 프린트해볼것! 자동차가 도로 밖을 못나가게 하자  방법이야 많지만 다른 방법이 생각나지 않으므로...
		//if문을 사용해서 도로가 그려진 부분의 시작과 끝부분을 찾아 입력해서 각 끝부분의 -1 픽셀에 차량을 다시 그리게 한다.
		}else if (p.x<=230){
			System.out.println("역주행");
		}
		repaint();
		//-p.getY()
		
	}
	@Override
	// swing에선 paint가 아닌 paintComponent를 사용한다.
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
