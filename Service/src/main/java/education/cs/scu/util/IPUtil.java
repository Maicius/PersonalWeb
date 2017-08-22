package education.cs.scu.util;

import javax.servlet.http.HttpServletRequest;

public class IPUtil {
    public static String getIP(HttpServletRequest request){
        String ip = request.getHeader("X-Forwarded-For");
        if(StringUtil.isNotEmpty(ip) && !"unKnown".equalsIgnoreCase(ip)){
            //多次反向代理后会有多个ip值，第一个ip才是真实ip
            int index = ip.indexOf(",");
            if(index != -1){
                return ip.substring(0,index);
            }else{
                return ip;
            }
        }
        ip = request.getHeader("X-Real-IP");
        if(StringUtil.isNotEmpty(ip) && !"unKnown".equalsIgnoreCase(ip)){
            return ip;
        }
        return request.getRemoteAddr();
    }
}
