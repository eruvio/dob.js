;(function($){
    $.fn.extend({
        dob: function(options) {

            var settings = $.extend({}, {
                separator: '/'
            }, options);

            return this.each(function() {

                // Reference to original context
                var $this = $(this);

                // Define storage for UI elements
                var $days, $months, $years;

                // Build new UI elements
                $days = $('<select>').attr({
                    class: 'days'
                });
                $months = $('<select>').attr({
                    class: 'months'
                });
                $years = $('<select>').attr({
                    class: 'years'
                });

                // Construct days
                for(var i=1;i<=31;i++){
                    $days.append(
                        $('<option>').attr({
                            value: i
                        }).html(i)
                    );
                }

                // Construct months
                var months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
                $.each(months, function(k,v){
                    $months.append(
                        $('<option>').attr({
                            value: k+1
                        }).html(v)
                    );
                });

                // Construct years
                var currentYear = new Date().getFullYear();
                for(var i=-1;i++ < 100;){
                    var year = currentYear - i;
                    $years.append(
                        $('<option>').attr({
                            value: year
                        }).html(year)
                    );
                }

                // Bind events
                $days.bind("change", function(){
                    $this.val($months.val() + settings.separator + $days.val() + settings.separator + $years.val());
                });
                $months.bind("change", function(){
                    $this.val($months.val() + settings.separator + $days.val() + settings.separator + $years.val());
                });
                $years.bind("change", function(){
                    $this.val($months.val() + settings.separator + $days.val() + settings.separator + $years.val());
                });

                // Hide original UI element
                $this.hide();

                // Inject new UI into DOM
                $this.after($years).after($days).after($months);

            });
        }
    });
})(jQuery);