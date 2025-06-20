package Rungame_2018;

import java.awt.*;
import java.awt.event.*;
import java.io.*;
import javax.swing.ImageIcon;

public class Car {
	double x, dx, y,ny2,ny;
	double dy;
	Image pcar;

	public Car() {
		ImageIcon i = new ImageIcon("D:\\java\\Rungame_Packages\\data\\p_car.png");
		pcar = i.getImage();
		//road size x = map.minpoint~149+420~map.maxpoint 
		x = 310;
		//y = 650;
		y=5500;
		ny2 =985;
		ny=0;
		
	}
	public void accel(){
		y= y+(dy/25);
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
			dx = -2;}
		if (key == KeyEvent.VK_RIGHT) {
			dx = 2;}
		if (key == KeyEvent.VK_UP) {
			//차량토크 구현
			if(dy<=0)
				dy -= 0.5;
			if (dy<=-45)
				dy-=0.02;
			if(dy<=-85)
				dy -= 0.004;
			if (dy<=-180)
				dy=-180;
		}
		if (key == KeyEvent.VK_DOWN) {
			dy += 1;
			if(dy>=1){
				dy =0;}
			}
		if (key == KeyEvent.VK_SPACE) {
			dy += 5;
			if(dy>=5){
				dy =0;}
			}
		
	}
	public void keyReleased(KeyEvent e){
		int key = e.getKeyCode();

		if (key == KeyEvent.VK_LEFT){
			dx = 0;}
		if (key == KeyEvent.VK_RIGHT){
			dx = 0;}
		if (key == KeyEvent.VK_UP) {
			while(dy>=0){
			dy+=1;
			}
			}
		if (key == KeyEvent.VK_DOWN) {
			dy = dy;}
		if (key == KeyEvent.VK_DOWN) {
			dy = dy;}
		
	}
	public void Key(KeyEvent e){
		
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
