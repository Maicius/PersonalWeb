package education.cs.scu.entity;

import java.io.Serializable;

public class IP implements Serializable{
    private String IP;
    private int times;

    public String getIP() {
        return IP;
    }

    public void setIP(String IP) {
        this.IP = IP;
    }

    public int getTimes() {
        return times;
    }

    public void setTimes(int times) {
        this.times = times;
    }
}
