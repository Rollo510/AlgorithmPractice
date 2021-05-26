def staircase(n)
    i = 1
    while i <= n
        (n-i).times {print " "}
        i.times {print "#"}
        puts
        i+=1
    end
end