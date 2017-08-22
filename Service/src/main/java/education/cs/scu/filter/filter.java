package education.cs.scu.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class filter implements javax.servlet.Filter{
    String [] forbidIps = null;
    public void destroy() {
        // TODO Auto-generated method stub
    }

    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain filterChain) throws IOException, ServletException {
        //由于拦截器定义的拦截规范是/* ,所以所有的请求都会被拦截，为了防止死循环 开一个特例显示具体的访问结果
        if(((HttpServletRequest)request).getRequestURI().contains("forbid.jsp")){
            filterChain.doFilter(request, response);
            return;//不加return 会继续执行请求。
        }

        String remoteAddr = request.getRemoteAddr();
        if(forbidIps!=null){
            for (int i=0; i<forbidIps.length; i++) {
                if(forbidIps[i].equals(remoteAddr)){
                    //如果访问的ip与配置的ip相等 则直接过滤掉。
                    ((HttpServletResponse)response).sendRedirect("forbid.jsp");
                    return;
                }
            }
        }
        filterChain.doFilter(request, response);
    }

    public void init(FilterConfig filterConfig) throws ServletException {
        //获取在web.xml中配置的<filter>的初始化参数
        String initParamter = filterConfig.getInitParameter("forbidIps");
        if(initParamter != null){
            forbidIps = initParamter.split(",");
        }
    }
}
