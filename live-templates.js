/** loops */

/**
 * @abbr: for
 * @desc: for loop
 * @param $INDEX$ {jsSuggestIndexName()} [i]
 * @param: $ARRAY$ {jsArrayVariable()} [array]
 * @param: $VAR$ {decapitalize(jsArrayVariable())} [a]
 */
for (var $INDEX$ = 0, len = $ARRAY$.length; $INDEX$ < len; $INDEX$++) {
    var $VAR$ = $ARRAY$[$INDEX$];
    $END$
}

/**
 * @abbr: rfor
 * @desc: reverse for loop
 * @param $INDEX$ {jsSuggestIndexName()} [i]
 * @param: $ARRAY$ {jsArrayVariable()} [array]
 * @param: $VAR$ {decapitalize(jsArrayVariable())} [a]
 */
for (var $INDEX$ = $ARRAY$.length - 1; $INDEX$ >= 0; $INDEX$--) {
    var $VAR$ = $ARRAY$[$INDEX$];
    $END$
}

/** conditions */

/**
 * @abbr: if
 * @desc: if
 * @param $COND$ {} []
 */
if ($COND$) {
    $END$
}

/**
 * @abbr: ifel
 * @desc: if, else
 * @param $COND$ {} []
 */
if ($COND$) {
    $END$
}
else {
    
}

/**
 * @abbr: ter
 * @desc: ternary operator
 * @param $COND$ {} []
 * @param: $EXPR$ {} []
 */
$COND$ ? $EXPR$ : $END$;

/** objects */
 
/**
 * @abbr: ctor
 * @desc: constructor
 * @param $CLASS$ {} [Class]
 * @param: $PARAM$ {} []
 */
var $CLASS$ = function($PARAM$) {
    $END$
};

/**
 * @abbr: m
 * @desc: method
 * @param $CLASS$ {jsQualifiedClassName()} [Class]
 * @param $FN$ {jsMethodName()} [fn]
 * @param $PARAMS$ {} [params]
 */
$CLASS$.prototype.$FN$ = function($PARAMS$) {
    $END$
};

/**
 * @abbr: t
 * @desc: this
 * @param $PROP$ {completeSmart()} []
 */
this.$PROP$;
$END$

/**
 * @abbr: o
 * @desc: literal object
 */
{
    p$END$
};

/**
 * @abbr: p
 * @desc: literal property
 */
$PROP$: $VAL$,
$END$

/**
 * @abbr: so
 * @desc: same line literal object
 */
{ sp$END$ };

/**
 * @abbr: sp
 * @desc: same line literal property
 */
$PROP$: $VAL$, $END$

/** debug */

/**
 * @abbr: clog
 * @desc: console log
 */
console.log($END$);

/**
 * @abbr: cwar
 * @desc: console warn
 */
console.warn($END$);

/**
 * @abbr: cerr
 * @desc: console error
 */
console.error($END$);

/** misc */

/**
 * @abbr: cl
 * @desc: closure
 */
(function() {
    $END$
})();

/**
 * @abbr: f
 * @desc: function
 * @param $FN$ {jsMethodName()} [fn]
 * @param: $PARAMS$ {} []
 */
function $FN$($PARAMS$) {
    $END$
};

/**
 * @abbr: us
 * @desc: use strict
 */
"use strict";
$END$
