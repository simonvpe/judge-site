---
title: 1. Functions
icon: fa-th
order: 2
---
In order to break up larger problems into smaller tasks, programmers often use functions.  In a language like C++, functions can be used to encapsulate pieces of code that you as a programmer use often, this habit is referred to as _DRY_, or _Don't Repeat Yourself_.

{% highlight cpp linenos %}{% raw %}
auto multiply(auto a, auto b) {
	return a * b;
}
{% endraw %}{% endhighlight %}

In the example below we have defined a function named `multiply`. It takes two arguments `a` and `b`, multiplies their values, and returns the result. You could call the function like so.

{% highlight cpp linenos %}{% raw %}
const auto thirty = multiply(5,6);
{% endraw %}{% endhighlight %}

This would multiply `5` with `6` and store the result in a _variable_ called `thirty`. More on variables later...

# Challenge

Can you make the following function return `42`?
{% include problem.html problemId="problem_1" fn="fourtytwo" source="
auto fourtytwo(std::string str) {
  return 0;
}
"%}
