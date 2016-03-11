/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
$('#test1').on("mouseenter", function(){
$('.jeden').show();     
});
$('#test1').on("mouseleave", function (){
$('.jeden').hide();    
});

$('.test2').on("mouseenter", function(){
$('.dwa').show();     
});
$('.test2').on("mouseleave", function (){
$('.dwa').hide();    
});

$('.test3').on("mouseenter", function(){
$('.trzy').show();     
});
$('.test3').on("mouseleave", function (){
$('.trzy').hide();    
});

 });