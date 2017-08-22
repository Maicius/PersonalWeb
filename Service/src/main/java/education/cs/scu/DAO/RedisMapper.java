package education.cs.scu.DAO;

import education.cs.scu.entity.IP;
import education.cs.scu.entity.User;

/**
 * Created by maicius on 2017/7/27.
 */
public interface RedisMapper {
    User doUserLoginRedis(User user) throws Exception;
    void doUserRegist(User user) throws Exception;
    void doUpdateIP(IP ip) throws Exception;
    IP checkIP(IP ip) throws Exception;
}
