// Collection - ArrayList object

import java.util.Iterator;
import java.util.ArrayList;

public class CollectionArrayList
{
	public static void main(String args[])
	{
		ArrayList l1 = new ArrayList(2);
		ArrayList l2 = new ArrayList(0);
		
		l1.add("Krishan");
		l2.add("Arora");
		l1.add(1,"Arun");
		l1.add("pop");
		l1.addAll(1,l2);
		l1.set(1, "Kumar");  // set method will replace the specified position and add new element
		l1.get(2);
//		l1.size();
		
//		l1.subList(1, 1);
//		l1.get(1);
		Iterator it = (Iterator) l1.iterator();
		while(((java.util.Iterator) it).hasNext())
		{
			System.out.println(it.next());
		}
	}
}