function Boutinit() {
                var elem = '<div style="position: relative"><span class="content"> MSG to display fefwefwe  we rw erwe r </span><span class="closeIcon boutCloseIcon"> X. </span></div>';
                var node = document.createElement("div");
                node.setAttribute("class", "mainNotification");
                node.innerHTML = elem;
                document.body.appendChild(node);

                window.Boutalert = {};
                Boutalert.Boutref = document.getElementsByClassName("mainNotification")[0];
                Boutalert.BoutrefInner = document.getElementsByClassName("content")[0];
                Boutalert.BoutrefRemove = document.getElementsByClassName("boutCloseIcon")[0];

                Boutalert.success = function (msg) {
                    Boutalert.reset();

                    Boutalert.BoutrefInner.innerHTML = msg;
                    Boutalert.addClass("success", Boutalert.Boutref)

                }
                Boutalert.error = function (msg) {
                    Boutalert.reset();
                    Boutalert.BoutrefInner.innerHTML = msg;
                    Boutalert.addClass("error", Boutalert.Boutref)
                }
                Boutalert.remove = function () {
                    Boutalert.reset();
                    Boutalert.addClass("remove", Boutalert.Boutref);
                    Boutalert.BoutrefInner.innerHTML = "";
                }
                Boutalert.reset = function () {
                    Boutalert.removeClass("remove", Boutalert.Boutref);
                    Boutalert.removeClass("error", Boutalert.Boutref);
                    Boutalert.removeClass("success", Boutalert.Boutref);
                    Boutalert.BoutrefInner.innerHTML = "";
                }
                Boutalert.addClass = function (classname, element) {
                    var cn = element.className;
                    if (cn.indexOf(classname) != -1) {
                        return;
                    }
                    if (cn != '') {
                        classname = ' ' + classname;
                    }
                    element.className = cn + classname;
                }
                Boutalert.removeClass = function (classname, element) {
                    var cn = element.className;
                    var rxp = new RegExp("\\s?\\b" + classname + "\\b", "g");
                    cn = cn.replace(rxp, '');
                    element.className = cn;
                }
                Boutalert.BoutrefRemove.onclick = function () {
                    Boutalert.remove();
                }

            }
window.onload = function(){
  Boutinit();
}
            
