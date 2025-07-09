
import java.awt.*;
import java.awt.event.*;
import java.io.*;
import javax.swing.ImageIcon;

public class Car {
	double x, dx, y, ny2, ny;
	double dy;
	Image pcar;
	private double decelerationRate = 0.05;
	private boolean isAccelerating = false; // 가속 중인지 여부
	private boolean isBraking = false; // 브레이크 중인지 여부

	public Car() {
		ImageIcon i = new ImageIcon(
				"C:\\Users\\C104\\Downloads\\gameScriptData-master\\Rungame_Packages\\data\\p_car.png");
		pcar = i.getImage();
		// road size x = map.minpoint~149+420~map.maxpoint
		x = 310;
		// y = 650;
		y = 5500;
		ny2 = 985;
		ny = 0;
		while (dy == 0) {
			dy += 1;
		}

	}

	public void accel() {
		y = y + (dy / 25);
		if (!isAccelerating && !isBraking) {
			// 속도가 0에 가까워지면 0으로 설정
			if (Math.abs(dy) < decelerationRate) {
				dy = 0;
			} else if (dy > 0) { // 양수 속도 (후진 또는 정지 중 전진)일 때 감소
				dy -= decelerationRate;
			} else if (dy < 0) { // 음수 속도 (전진)일 때 증가 (0으로 수렴)
				dy += decelerationRate;
			}
		}
	}

	public void move() {
		x = x + dx;
	}

	public int getX() {
		return (int) x;
	}

	public int getY() {
		return (int) y;
	}

	public Image getImage() {
		return pcar;
	}

	public void keyPressed(KeyEvent e) {
		int key = e.getKeyCode();
		if (key == KeyEvent.VK_LEFT) {
			dx = -5;
		}
		if (key == KeyEvent.VK_RIGHT) {
			dx = 5;
		}
		if (key == KeyEvent.VK_UP) {
			if (dy <= 0)
				dy -= 0.5;
			if (dy <= -180)
				dy = -180;
		}
		if (key == KeyEvent.VK_DOWN) {
			dy += 1;
			if (dy >= 1) {
				dy = 0;
			}
		}
		if (key == KeyEvent.VK_SPACE) {
			dy += 5;
			if (dy >= 5) {
				dy = 0;
			}
		}

	}

	public void keyReleased(KeyEvent e) {
		int key = e.getKeyCode();

		if (key == KeyEvent.VK_LEFT) {
			dx = 0;
		}
		if (key == KeyEvent.VK_RIGHT) {
			dx = 0;
		}
		if (key == KeyEvent.VK_UP || key == KeyEvent.VK_DOWN || key == KeyEvent.VK_SPACE) { // UP, DOWN, SPACE 키가 떼졌을 때
			dy -= 1; // dy 값을 0으로 설정하여 전진/후진 속도를 잃게 함
		}
	}

	public void Key(KeyEvent e) {

	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
