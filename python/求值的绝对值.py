# coding= utf-8
# 上一句中，'='必须紧随coding'之后，且'utf-8'不能加引号


# value = raw_input(u"请输入一个数值：");
value = raw_input("please input a value:");
print u"它的绝对值是："
if value >= 0:
	print value
else:
	print -value

# python的特别之处：
# 大于等于居然可以写成：
# >=
# 其它编程语言大多是分成两种情况，然后再用and运算符来连接。

