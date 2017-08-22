package education.cs.scu.controller;

import education.cs.scu.entity.IP;
import education.cs.scu.entity.User;
import education.cs.scu.service.LoginService;
import education.cs.scu.util.IPUtil;
import education.cs.scu.util.RegUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

@CrossOrigin
@RestController
public class receiveEmail {
    @Autowired
    private LoginService loginService;

    @RequestMapping(value="/receiveEmail", method= RequestMethod.POST)
    public String userLogin(HttpServletRequest request, @RequestBody String json) throws Exception {
        String ujson = "";
        String res = "";
        try {
            ujson = new String(json.getBytes("ISO-8859-1"), "utf-8");
            res = URLDecoder.decode(ujson, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            return "未知错误";
        }
        if(!RegUtil.checkEmail(res.substring(6))){
            return "搞啥啊兄弟";
        }
        User user = new User();
        user.setUserName(res.substring(6));
        user.setIp(IPUtil.getIP(request));
        IP ip = new IP();
        ip.setIP(IPUtil.getIP(request));
        String ipExists = loginService.checkIP(ip);
         if (ipExists.equals("404")){
            return "大哥你再闹我就要封IP了啊！";
        }
        System.out.println(user.getUserName());
        String exists = loginService.checkUserExist(user);
        if (exists.equals("400")) {
            return "400";
        }
        else if (exists.equals("404")){
            return "大哥你再闹我就要封IP了啊！";
        }
        else {
            try {
                loginService.doUserRegist(user);
                System.out.println(res);
                if(ipExists.equals("400"))
                    return "201";
                else{
                    return "200";
                }
            } catch (Exception e) {
                return null;
            }
        }
    }
}
