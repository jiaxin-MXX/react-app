import React, { Component } from 'react';
import {Coun} from './product.js'
class count extends Component {
        click = (flag)=>{
                return ()=>{
                        if(flag){
                                this.refs.value.innerText++
                        }else{
                                if(Number(this.refs.value.innerText-1)>=0){
                                        this.refs.value.innerText--
                                }
                        }
                        
                }
        }    
    render() {
        
        return (
            <Coun className="product-opera bottom">
                    <div className="opera-cho">
                            <div className="model">
                                    <p className="model-name">数量</p>
                                    <div className="number"><span onClick={this.click(0)} className="items">-</span> <span
                                                className="items" ref='value'>1</span> <span
                                                className="items" onClick={this.click(1)}>+</span></div>
                            </div>
                    </div>
                    <div className="product-adv border-top-px">
                            <div className="item"><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRDN0MxOTI1QkE3ODExRTk4OUUwRTg4MUMxMzFBMUVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRDN0MxOTI2QkE3ODExRTk4OUUwRTg4MUMxMzFBMUVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REM3QzE5MjNCQTc4MTFFOTg5RTBFODgxQzEzMUExRUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REM3QzE5MjRCQTc4MTFFOTg5RTBFODgxQzEzMUExRUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6YtmOIAAADNElEQVR42ryXS2hTQRSGE3t9lIroRtHaFq2Pgm5Mi4qPhaVYlboQN1UUV41vUehCgi5EdOH7hW1iceVrpYioC60iKlSwuqlFxJJGi10IVWgsiK3xP/KPHK6Te28S9MCXm5nc3H/OnDNn5obj8XgooE0HtaAeLAKV7E+BDnAXPAZ90WjU92FhH+FRoAG0gqkBBygD2SUDwQAyXg/OZlUyenCbol/BAXo7GYwHJfxeA2K8pwLcAclEIjErV49lxOf5/R3YCF6BvzzQ0wqhMC4RcB3MZncTaHNPv83j40p0Oz3vtIlaBpEBcu9c/lfskswUBuUpLJ4283s1Y5sJ5WgcQCtDIHYYbMsmPEd5Ws2pLcjofYTNFnhd5Y6xDOADKOUUtar/TwLjctQchGhaxV68bQH9sizx20/j8VqKSiLpbJsJBsCnHBmEWIl6jjyzm6ujQXvcR+EaJpKxseAQKLZ4tZQh6QKPXL99Bkf0OsZAInz2R1Du4KOMogOWuH4H+7NM5zpwE5yFQFuA6X9Njd96MtV1/OGYRwYXgcYsngfOdFxOsFkrwmvYeODxv/ksCo0FJrrRWO0wViFmtV9pLbL8FkP8Vrr6XoCTls0ixetCRxX/b3l6MYNoWw/OgBFX/xCvlbqAhPMUPg2muZgAb0cs9/7JIYfpXcadZigP4W6I9Ae816ztpHj8jI3y0L83E5IOEb7Pxqr/IGw07slUt7Mhu9JR11oeA+bxuCO2TFW2FaYPWd1piWUXQjDs2qv3sdnusLameHKQEvhSPWArOKfaW0jIp09sN7ig2nJymQh6ZLNw2LmDh7UbPDkYry+zjudjD13eXjNasr6NsMQ5yZNjqRKTtX3LpxQGGcReJlaPqV6OiolM84ICPLQavJW8OMVmndmxdAH5YtneChVdjstTNjdDtFcXEC8bDYZzPXcxps3c8cQOgiv6HsenyqSZ8Rv4tpAJILiYO1kFuzeBq+5c8HqTEG/fqPNxmktLsr9XlddiHpFke93Dg745j9fr6Q3q8Q+ej+V96SJPoTHiZW/BTnmP8nqF8YtxhpVNBjAFLGEVkz3cvJ68B8+5bp/IeSvIEvslwABfifRvfFbbIAAAAABJRU5ErkJggg=="
                                            alt=""className="responImg" /> 正品保证
                            </div>
                            <div className="item"><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUxOEJGMkRFQkE3ODExRTk4OERGQUVDMUY1MjJEMjExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUxOEJGMkRGQkE3ODExRTk4OERGQUVDMUY1MjJEMjExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTE4QkYyRENCQTc4MTFFOTg4REZBRUMxRjUyMkQyMTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTE4QkYyRERCQTc4MTFFOTg4REZBRUMxRjUyMkQyMTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4E9eiJAAADBElEQVR42pyXXWwNQRTHd8cloiQiirb0qtLWZyL1EREibUkqPJA0XjQS4YbGE33kyYPQNyrkVjy1D7zQiBaN+oggJMQTqdAqqmmakGgobVz/k/z3GjfdnZk9yS+zszu7/z2zZ86c9TOZjGeydDotTRHYDGrAGrCIl/vBc3ALPAQDYc9JpVLZ44RBUKHZAS6CgpBhy8g+9j+AI+AmCPVKRYhWoPkE2in6DewHC0EemEymgQWgnmOS4AboBYvDnp8ImVZ543M81QO2ckonsnG+YCuZDzrBCvAWHASXIj2maJMmuguU49v069/HYPISK8F29lvAcZPH4mkjj5Mi6MW3TgbkZ3ASDDNW/vcY3pZpnhbHEN00wbkBLSgvMG7+CTN6u3luN0Q/OorWgRkh1wbBNh53Uyvr8U5Oy0twzVG0FlwF9yLGdHGNF3B5eooBdV7z1kV0A+jgmv1pGLuHbbNoKnoqDIE+B9HV4DGPT1mMH+TaljVfJMJbeKHRwVvJVC+0/jPL+46xrVJMDmL3LW+WzPVK618GY5b3BjNUK8Lr2Rm2uLGQ2Uhf/1ccPs9XtutEeB47Y4YNw2cmy53W2/x+ZxnhUTbOtlTZviq+f4bRvxFMApXa5bngMHht+zzF3Opxp7G1P2B5jidLLFZF8Il6lTZ1+Q7CPqdWbNRSVGwW26cifIedagdhCciZ4AcocVj/QT7vEOEH7JxhFrOxZoqWMrBsrYntXcUbpVyZzTVqMsk8S2OIFrI6eQe+KGarBl5st/D6aAxRsetsG0RTaZu25NFVYE7EzVPB6RiisiOtpbdd2W2Ra7SSATYU8YDRGKLFLP7Eaqjl+TZ1dU5N5mJJLeLrIdpqLG8plIgh5mmFYiB6ghWouaCHoNTOIxLxOK5C+97BS8kNZezvBW3WBT3sN3eiYAl8B4f46yIvNYXkMYkc4Jg+ivbwfJvTnwS+h+xW5fxXkodMl0qRLyEz8YuMcDZaOOYNg7QiKqP5Dj9t+ayxqtmWBAkfPGGx9yhqX9crnL8CDABcFdoDZn2dvQAAAABJRU5ErkJggg=="
                                            alt=""className="responImg" /> 闪电发货
                            </div>
                            <div className="item"><img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU2NEU5NUQ2QkE3ODExRTk4ODA5QkJGRDg3QjA4MzhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU2NEU5NUQ3QkE3ODExRTk4ODA5QkJGRDg3QjA4MzhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTY0RTk1RDRCQTc4MTFFOTg4MDlCQkZEODdCMDgzOEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTY0RTk1RDVCQTc4MTFFOTg4MDlCQkZEODdCMDgzOEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7iYI9gAAADKklEQVR42qyX328MURTHdydLwnqgookf1SiqkXhRiTahhEaR+gM0Gk82USKa1IvwJBFBJH6zvG39eBWhfiRlBZXUrjcrpOlWNkiwJNgHTYzv4XvX7WTuzKzZk3wyd37sfO85e865d6K2bUf8LJlMymEuaAPtYAVo4O23YBjcAY/AO9N7EolEeRzzEbRw6AQXwGzDY0vJdp6Pgd3gFjB6ZXmINuFQADco+hUcACtBLZgG4hxLBPbzmXpwE4yCRab3xwxhlRmf5qXXoAtkDR6UwEeQAUfAcnANLAZvwA5w2dNjih7TRHeCJvw3GeCfDH8nJhNYwt+KXWKkPD0WT/s4boZYNvJ/ZjMvJOmeg0PgE69N9BjeNmqehhHVLcPQi51n3vwTZvYOqvAqUQk9w69bC0iBbQHFX2hhH6RW2eMtrFNJpIum2qPNoGhHBZ7LO1+yOjr/CNOjs3ygS08iF9FIiP+8m+Mzoikez6O3RZZMGIuSGh6dIReNOjBHhNfyxlGvksEs1Utn8pK8YBPDniK/yGc64/T6OMdtMe2/uu8iJjM/yVNnMq0hJiu5XBONw2BDjC1QNXs3M2WvtMRdHOfBN4p90Tx02pgqV0tr/j9cVpMiF4A69mV5fjNvPwEDJMe+XqSg7ROFhpgjMdyWspyjpYbN7nIDKXAcr0LZTAUP2WTcHFEaeREe4sn8KgjXMOGGDGv9Ah6HRfgeTzZWQXgZj/1g3OW+0rgrwmme9LFW/SyvZXvKwW3eyxqaSy/HaQnHe6a57ByauYx5WY7tz7RQpJ39niZlOx2MgA8W+3EPb17XvfbIYgnlZJaZTpydsOTi7VWOe0RTJcAAG8JCtrpCgEViXKsIP9vLxBpRHdKigM0wr6/gZUFtFTjBcbtaD6JB9tUhGshq7rXFuiHa77u9pdCkgJnulsH7NNGDzAv/DT0EJVG+S8ZjvBXHZ14bdE2whdvbeq3srvjuqzX7yX2x7I+fchKn+IWQ1zJ3Cj9nZPHYw42+2o93aHU/cYZe/zHDvA6cA40Bw/yKy+UDZ4T0KolW8NE2C7Qy81u1vjvK3ixCj7l/9v1o+y3AAC75+hhcD1/pAAAAAElFTkSuQmCC"
                                            alt=""className="responImg" /> 七天无理由退货(拆封后不支持)
                            </div>
                    </div>
            </Coun>
        );
    }
}

export default count;