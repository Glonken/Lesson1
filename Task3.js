"user strict;"

obj = {
    method1: function() {return this},
    method2: function() {return this},
    method3: function() {return 'метод3'},
}

alert(obj.method1().method2().method3());