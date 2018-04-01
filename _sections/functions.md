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
// This tells the compiler that we are interested in the input-/outputstream functionality.
// We need that in order to reply to the Judge so that it can grade our problem submission
#include <iostream>

// This is the function that you need to modify
auto fourtytwo() {
  return 0;
}

// This is the entrypoint of the program, this function gets executed automatically
// when the program is started
int main() {

	// This sends the result of the function you modified to standard output, this is how
	// you tell the Judge what your answer is
	std::cout << fourtytwo();
	
	// This returns zero to the operating system, signalling that the program exited
	// with a success status
	return 0;
}
"%}
