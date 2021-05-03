(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{365:function(e,t,a){"use strict";a.r(t);var s=a(45),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adding-adversarial-attacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-adversarial-attacks"}},[e._v("#")]),e._v(" Adding Adversarial Attacks")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"./development"}},[e._v("development guidelines")]),e._v(" explain how to get started with\nwith developing features and adversarial attacks for Foolbox.")])]),e._v(" "),a("h2",{attrs:{id:"the-attack-base-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-attack-base-class"}},[e._v("#")]),e._v(" The "),a("code",[e._v("Attack")]),e._v(" base class")]),e._v(" "),a("p",[e._v("Adversarial attacks in Foolbox should either directly or indirectly subclass\nthe "),a("code",[e._v("Attack")]),e._v(" base class in "),a("code",[e._v("foolbox/attacks/base.py")]),e._v(".")]),e._v(" "),a("p",[e._v("An attack in Foolbox needs to implement two methods, "),a("code",[e._v("__call__")]),e._v(" and "),a("code",[e._v("repeat")]),e._v(".")]),e._v(" "),a("p",[e._v("Both methods need to be implemented with the same signature as the base class.\nThe type annotation for the "),a("code",[e._v("criterion")]),e._v(" argument of "),a("code",[e._v("__call__")]),e._v(" can be made\nmore precise, see "),a("code",[e._v("foolbox/attacks/carlini_wagner.py")]),e._v(" for an example.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("__call__")]),e._v(" method should return three values, a list of raw tensors (one\nfor each epsilon) with the internal raw attack results, a list of tensors\ncorresponding to the raw tensors but with perturbation sizes guaranteed to\nbe clipped to the given epsilons, and a boolean tensor with "),a("code",[e._v("len(epsilons)")]),e._v("\nrows and "),a("code",[e._v("len(inputs)")]),e._v(" columns indicating for each returned sample whether\nit is a successful adversarial example given the respective epsilon and\ncriterion. If "),a("code",[e._v("epsilons")]),e._v(" is a single scalar epsilon (and not a list with\none element), then the first and second return value should be a tensor\nrather than a list and the third return value should be 1-D tensor.")]),e._v(" "),a("p",[e._v("All returned tensors must have the same type as the input tensors. In\nparticular, native tensors should be returned as native tensors and\nEagerPy-wrapped tensors should be returned as EagerPy-wrapped tensors.\nUse "),a("code",[e._v("astensor_")]),e._v(" or "),a("code",[e._v("astensors_")]),e._v(" and "),a("code",[e._v("restore_type")]),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("repeat")]),e._v(" method should return a version of the attack that repeats itself\nn times and returns the best result.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("In practice, it is usually not necessary to subclass "),a("code",[e._v("Attack")]),e._v(" directly.\nInstead, for most attacks it is easiest to subclass either "),a("code",[e._v("FixedEpsilonAttack")]),e._v("\nor "),a("code",[e._v("MinimizatonAttack")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"the-fixedepsilonattack-base-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-fixedepsilonattack-base-class"}},[e._v("#")]),e._v(" The "),a("code",[e._v("FixedEpsilonAttack")]),e._v(" base class")]),e._v(" "),a("p",[e._v("Attacks that require a fixed epsilon and try to find an adversarial\nperturbation given this perturbation budget (e.g. "),a("code",[e._v("FGSM")]),e._v(" and "),a("code",[e._v("PGD")]),e._v(") should\nbe implemented by subclassing "),a("code",[e._v("FixedEpsilonAttack")]),e._v(". It already provides\nimplementations of "),a("code",[e._v("__call__")]),e._v(" and "),a("code",[e._v("repeat")]),e._v(". The attack just needs\nto specify the "),a("code",[e._v("distance")]),e._v(" property (simply assign a class variable) and\nimplement the "),a("code",[e._v("run")]),e._v(" method that gets a single "),a("code",[e._v("epsilon")]),e._v(" and returns a batch\nof perturbed inputs, ideally adversarial and ideally with a perturbation\nsize smaller or equal to "),a("code",[e._v("epsilon")]),e._v(".\nThe "),a("code",[e._v("distance")]),e._v(" is used by "),a("code",[e._v("__call__")]),e._v(" to determine which perturbed inputs\nare actually adversarials given "),a("code",[e._v("epsilon")]),e._v(" and by "),a("code",[e._v("repeat")]),e._v(" to determine the\nrun.")]),e._v(" "),a("h2",{attrs:{id:"the-minimizatonattack-base-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-minimizatonattack-base-class"}},[e._v("#")]),e._v(" The "),a("code",[e._v("MinimizatonAttack")]),e._v(" base class")]),e._v(" "),a("p",[e._v("Attacks that try to find adversarial examples with minimal perturbation size\n(e.g. the "),a("code",[e._v("Carlini & Wagner")]),e._v(" attack or the "),a("code",[e._v("Boundary Attack")]),e._v(") should\nbe implemented by subclassing "),a("code",[e._v("MinimizatonAttack")]),e._v(". It already provides\nimplementations of "),a("code",[e._v("__call__")]),e._v(" and "),a("code",[e._v("repeat")]),e._v(". The attack just needs\nto specify the "),a("code",[e._v("distance")]),e._v(" property (simply assign a class variable) and\nimplement the "),a("code",[e._v("run")]),e._v(" method that returns a batch of minimally perturbed\nadversarials. For "),a("code",[e._v("MinimizatonAttack")]),e._v(" subclasses, "),a("code",[e._v("run")]),e._v(" gets called only once\nby "),a("code",[e._v("__call__")]),e._v(" independent of how many "),a("code",[e._v("epsilons")]),e._v(" are given. The "),a("code",[e._v("__call__")]),e._v("\nmethod then compares the minimal adversarial perturbation to the different\nepsilons.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You should have a look at the implementation of existing attacks\nto get an impression of the best practices and conventions used in Foolbox.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);