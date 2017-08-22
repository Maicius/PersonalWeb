package education.cs.scu.entity;

import java.io.Serializable;

/**
 * Created by maicius on 2017/3/31.
 */
public class User  implements Serializable{
    private String userName;
    private String password;
    private String nickName;
    private String ip;
    private int accessTimes;
    public User(){}

    public User(String userName, String password, String nickName){
        this.userName = userName;
        this.password = password;
        this.nickName = nickName;
    }
    public User(String userName, String password){
        this.userName = userName;
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public int getAccessTimes() {
        return accessTimes;
    }

    public void setAccessTimes(int accessTimes) {
        this.accessTimes = accessTimes;
    }
}
